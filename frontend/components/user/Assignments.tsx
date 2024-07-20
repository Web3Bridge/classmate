import { assignmentData } from "@/utils/Assignments";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Assignment = () => {
  return (
    <section className="mx-auto flex flex-wrap justify-center items-center bg-gray-100 p-8">
      <div className="md:w-[80%]">
        <h1>Assignments</h1>
        <div className="bg-gray-200 border-b shadow-lg border-black rounded-lg my-4 flex justify-between p-8">
          <Table>
            <TableCaption>A list of assignments.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Mentor</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignmentData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.header?.mentor}
                  </TableCell>
                  <TableCell>{item.header?.subtitle}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Assignment;
