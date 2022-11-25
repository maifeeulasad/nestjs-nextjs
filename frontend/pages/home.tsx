import { useEffect, useState } from "react";
import Router from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenAtom } from "../atoms/atoms";

interface INasaDatum {
  id: number;
  earth_date: string;
  img_src: string;
}

export default function Home() {
  const [nasaData, setNasaData] = useState<INasaDatum[]>([]);
  const [accessToken] = useRecoilState(accessTokenAtom);

  useEffect(() => {
    if (accessToken === undefined) {
      Router.push("/login");
    } else {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
      )
        .then((res) => res.json())
        .then(({ photos }) => {
          setNasaData(photos);
        });
    }
  }, [accessToken]);

  return (
    <div>
      {nasaData.map((nasaDatum) => {
        return (
          <div key={nasaDatum.id}>
            <img
              width={200}
              height={200}
              src={nasaDatum.img_src}
              alt={nasaDatum.id.toString()}
            />
            <div>{nasaDatum.earth_date}</div>
          </div>
        );
      })}
    </div>
  );
}
