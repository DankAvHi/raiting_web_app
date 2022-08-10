export type Nomination = {
     id: "seller" | "manufacturer" | "forum";
     text: string;
     isActive?: boolean;
};

export type Nominations = Nomination[];
