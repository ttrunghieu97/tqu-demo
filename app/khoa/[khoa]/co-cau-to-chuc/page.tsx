import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AutoBreadcrumbs from '@/components/AutoBreadcrumb';

interface Lecturer {
  name: string;
  position: string;
  phone: string;
  email: string;
  imageUrl: string;
}

// Type definition for Params
type Params = {
  params: Promise<{
    khoa: string;
  }>;
};

// Fetch data for the given khoa
async function getData(khoa: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/co_cau_to_chuc?filter[title][_eq]=${khoa}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: Params) {
  // Resolve params asynchronously
  const resolvedParams = await params;
  const { khoa } = resolvedParams;

  // Fetch the data based on the khoa
  const data = await getData(khoa);

  let lecturers: Lecturer[] = [];
  if (data.data[0]?.content) {
    try {
      lecturers = eval(`[${data.data[0].content}]`); // Parsing content into an array of lecturers
    } catch (error) {
      console.error('Error parsing lecturer data:', error);
    }
  }

  return (
    <>
      <AutoBreadcrumbs />
      <div className="min-h-screen bg-background dark:bg-gray-900 text-black dark:text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
            DANH SÁCH GIẢNG VIÊN
          </h1>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {lecturers.map((lecturer, index) => (
              <Card
                key={index}
                className="transition-all duration-300 ease-in-out 
                hover:shadow-lg hover:bg-accent
                bg-white dark:bg-gray-800 p-4 rounded-md"
              >
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                    <div className="w-60 h-60 relative shrink-0">
                      <Image
                        src={lecturer.imageUrl}
                        alt={lecturer.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold mb-3">{lecturer.name}</h2>
                      <p className="text-xl text-muted-foreground mb-6">{lecturer.position}</p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <span className="text-lg">{lecturer.phone}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <a
                            href={`mailto:${lecturer.email}`}
                            className="text-lg text-primary hover:underline"
                          >
                            {lecturer.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}
