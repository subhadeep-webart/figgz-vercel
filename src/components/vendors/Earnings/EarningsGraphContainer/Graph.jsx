// "use client";

// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const Graph = () => {
//   return (
//     // <div className={styles.chartContainer}>
//             <ResponsiveContainer width="100%" height={300}>
//                 <BarChart
//                 className="bg-green-300"
//                     data={data}
//                     margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
//                 >
//                     {/* <CartesianGrid strokeDasharray="3 3" /> */}
//                     <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} dy={10} />
//                     {/* <YAxis /> */}
//                     <Tooltip />
//                     <Bar dataKey="uv" fill="#B4A4EE" radius={[10, 10, 0, 0]} barSize={20} />
//                 </BarChart>
//             </ResponsiveContainer>
//         // </div>
//   );
// };

// export default Graph;
