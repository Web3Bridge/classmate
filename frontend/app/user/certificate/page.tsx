import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Certificate() {
  return (
    <section className="mx-auto">
      <div className="mb-4">
        <p className="uppercase font-bold">View Certificate</p>
      </div>
      <div className="mx-auto mt-12 w-[90%] md:w-[70%]">
        <Card className="bg-color2 text-gray-100 border-none text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Coming Soon...</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We’ll let you know when this is ready, in the meantime, enjoy your
              learning experience.
            </p>
            <div className="flex items-center justify-center mt-4">
              {/* Container for Input and Button */}
              <Input className="w-[80%] bg-white/30" />
              <button className="ml-2 bg-color1 hover:bg-color1/50 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
              {/* Example Button */}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <p>Notify me when it is ready</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
