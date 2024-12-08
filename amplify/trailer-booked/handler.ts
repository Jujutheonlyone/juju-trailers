import {Handler} from "aws-cdk-lib/aws-lambda";

export const handler: Handler = async (event: any) => {
  console.info(event);
  return "A Trailer has been booked.";
};
