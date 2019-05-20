import { Database } from "../services/database";
import {injectable, container} from "tsyringe";
import { startOfWeek, endOfWeek, format } from "date-fns";
import * as ko from "date-fns/locale/ko";
import { Resolver, SelectEmptyRoom, InsertReservation, MeetingRoom, Reservation } from "@src/interface";

@injectable()
export class Resolvers {
    public readonly database: Database = container.resolve(Database);
    public resolvers: Resolver;
    constructor() {
        this.resolvers = {
            Query: {
                reservations: () => this.selectWeekReservation(),
                rooms: (_, args) => this.selectEmptyRoom(_, args)
            },
            Mutation: {
                insertReservation: (_, args) => this.insertReservation(_, args),
            }
        }
     }

    async insertReservation(_, args:InsertReservation) {
        const { memberId, meetingRoomId, reservationTime } = args;        
        try {
            const result = await this.database.query(`
            INSERT INTO reservation (member_id, meeting_room_id, reservation_time)
            VALUES (${memberId}, ${meetingRoomId}, "${reservationTime}")
            `);
            return '성공';
        } catch (error) {
            throw error;
        }
    }

    async selectEmptyRoom(_, args: SelectEmptyRoom){
        try {
            console.log(args);
            const { targetDate } = args;
            const result: Array<MeetingRoom> = await this.database.query(`
            SELECT *
            FROM MEETING.meeting_room AS m_r
            WHERE NOT EXISTS (
                        SELECT r.meeting_room_id
                        FROM MEETING.reservation AS r
                        WHERE r.meeting_room_id = m_r.id AND r.reservation_time = "${targetDate}");
            `)
            return result;
        } catch (error) {
            throw error;
        }
    }

    async selectWeekReservation(){
        try {
            const startTime = format(startOfWeek(new Date(),{weekStartsOn:1}), 'YYYY-MM-DD HH:mm:ss', {locale: ko});
            const endTime = format(endOfWeek(new Date(),{weekStartsOn:1}), 'YYYY-MM-DD HH:mm:ss', {locale: ko});
            const result: Array<Reservation> = await this.database.query(`
                SELECT *
                from reservation as r
                JOIN member as m ON m.id = r.member_id
                JOIN meeting_room as m_r ON m_r.id = r.meeting_room_id
                where reservation_time BETWEEN "${startTime}" and "${endTime}"
            `);
            return result;
        } catch (error) {
            throw error;
        }
    }
}