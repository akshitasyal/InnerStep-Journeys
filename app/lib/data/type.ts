interface AcitvityType {
  heading: string;
  subHeading: string;
  activity: {
    src: string;
    title: string;
  }[];
}

export interface ServiceData {
  heading: string;
  subHeading: string;
  activity: AcitvityType;
}
