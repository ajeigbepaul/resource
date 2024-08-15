import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  slug: string;
}
const ResourceCard = ({ id, title, image, downloadNumber, slug }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 text-white !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5">
          <div className="h-[150px] w-full">
            <Image
              src={image}
              alt={title}
              className="h-full rounded-md object-cover"
              width={284}
              height={300}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold w-full line-clamp-1 text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5">
          <Image src="/downloads.svg" width={20} height={20} alt="download" />
          {downloadNumber}
        </div>
        <Link href={`/resource/${id}`} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
        Download now
        <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow"/>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
