import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function CardComp() {
  return (
    <Card className="w-1/2 bg-neutral-800 text-white">
      <CardHeader>
        <CardTitle className="text-center">Advance Todo</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default CardComp;
