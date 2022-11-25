import { useEffect, useState } from "react";

interface INasaDatum{
    id: number;
    earth_date: string;
    img_src: string;
}

export default function Home() {
  const [nasaData, setNasaData] = useState<INasaDatum[]>([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((res) => res.json())
      .then(({photos}) => {
        setNasaData(photos);
      });
  }, []);

  return <div>
    {
        nasaData.map((nasaDatum)=>{
            return <div key={nasaDatum.id}>
                <img width={200} height={200} src={nasaDatum.img_src} alt={nasaDatum.id.toString()}/>
                <div>{nasaDatum.earth_date}</div>
            </div>
        })
    }
  </div>;
}
