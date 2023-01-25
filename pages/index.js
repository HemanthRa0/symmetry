import * as XLSX from "xlsx";
import data from "./data2.json";
export default function Home() {
  console.log('Column5' in data.values[1]);

  return (
    <div className="w-fit">
    <nav className="py-4 pl-4 w-full">
    <img
          className="cursor-pointer h-[30px] w-[180px]"
          src="/symmetry-trans.png"
        />

    </nav>
    <hr class="h-[2px] w-full mt-4 mb-8 bg-gradient-to-r from-purple-700 to-pink-500 border-0"></hr>
    <div className="my-2 w-full bg-gradient-to-r  from-pink-100 to-purple-100">
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="text-s border-1 text-white  uppercase  bg-gradient-to-r from-purple-700 to-pink-500">
          <tr className="">
            {Object.keys(data.header).map((key, idx) => (
              <th scope="col" className="px-6 border-r-2  border-l-2 py-3" key={idx}>{data.header[key]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.values.map((key, idx) => (
            <tr className="border-2" key={idx}>
              {Object.keys(key).map((k, i) => (
                  <td className="px-6 py-4">{key[k]}</td>
              ))}
              {/* <td>{data.values[key]}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
