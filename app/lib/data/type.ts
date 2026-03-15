interface ActivityType {
  heading: string;
  subHeading: string;
  activity: {
    src?: string;
    title: string;
    description?: string;
    includes?: string[];
    link?: string;
  }[];
}

export interface ServiceData {
  heading: string;
  subHeading: string;
  activity: ActivityType;
  imageGallery : {
    heading : string,
    quote : string,
    quoteAuthor : string,
    section : string
  }
}
