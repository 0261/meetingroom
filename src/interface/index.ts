export interface MeetingRoom {
    table_size: string;
    id: number;
    name: string;
} 
export interface Reservation {
    meeting_room_id: number;
    member_id: number;
    reservation_time: string;
}

export interface InsertReservation {
    memberId: number;
    meetingRoomId: number;
    reservationTime: string
}

export interface SelectEmptyRoom {
    targetDate: string;
}

export interface Resolver {
    Query?: {
        reservations: () => any
        rooms: (_: any, args: SelectEmptyRoom) => any
    },
    Mutation?: {
        insertReservation: (_: any, args: InsertReservation) => any;
    }
}