import {defineFunction} from "@aws-amplify/backend";

export const trailerBooked = defineFunction({
  name: "trailer-booked",
  entry: "./handler.ts"
});
