// import React, {useCallback, useState} from 'react';
// import {Cell, Pie, PieChart, ResponsiveContainer, Sector} from 'recharts';
// import {Label} from 'components';

// interface IProps {
//   status: number[];
//   navigate: (item: string) => void;
//   translate: (key: string) => string;
// }

// interface IObjForChart {
//   value: number;
//   name: string
// }

// const StatusChart = ({status, navigate, translate}: IProps) => {

//   const windowWidth = window.innerWidth;
//   const BigTabletWidth = 768 <= windowWidth && 845 >= windowWidth;
//   const mobileWidth = 430 > windowWidth;
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const onPieEnter = useCallback((_: any, index: number) => {
//     setActiveIndex(index);
//   },
//   [setActiveIndex],
//   );

//   const renderActiveShape = (props: any) => {
//     const {
//       cx,
//       cy,
//       innerRadius,
//       outerRadius,
//       startAngle,
//       endAngle,
//       fill,
//       payload,
//     } = props;

//     return (
//       <g>
//         <text
//           x={cx} y={cy}
//           dy={8} textAnchor="middle"
//           fill={'black'}
//         >
//           {payload.name}: {' '}{payload.value + '/' + status.length}
//         </text>

//         <Sector
//           cx={cx}
//           cy={cy}
//           innerRadius={innerRadius}
//           outerRadius={outerRadius}
//           startAngle={startAngle}
//           endAngle={endAngle}
//           fill={fill}
//         />
//         <Sector
//           cx={cx}
//           cy={cy}
//           startAngle={startAngle}
//           endAngle={endAngle}
//           innerRadius={outerRadius + 6}
//           outerRadius={outerRadius + 10}
//           fill={fill}
//         />
//       </g>
//     );
//   };

//   const handleCreateStatusObjectsForRenderInChart = () => {
//     const statusList: string[] = [];

//     const getStatusString = (statusNumberCode: number) => {
//       switch (statusNumberCode) {
//       case 1:
//         statusList.push(translate('Unknown'));
//         return;
//       case 11:
//         statusList.push(translate('Missing'));
//         return;
//       case 22:
//         statusList.push(translate('GroupDifference'));
//         return;
//       case 31:
//         statusList.push(translate('New'));
//         return;
//       case 33:
//         statusList.push(translate('Ok'));
//         return;
//       default:
//         return null;
//       }
//     };

//     status.map(el => getStatusString(el));

//     return statusList?.reduce((acc: IObjForChart[], el: string) => {
//       const existInAcc = acc.find((elem: IObjForChart) => elem.name === el);
//       if (existInAcc) {
//         existInAcc.value += 1;
//         return acc;
//       }
//       return [...acc, {name: el, value: 1}];
//     }, []);

//   };
//   const statusColorsNamesAndNumbers = [
//     {color: '#ffdf00', name: translate('GroupDifference'), statusNr: 20},
//     {color: '#309d1b', name: translate('Ok'), statusNr: 33},
//     {color: '#eb3242', name: translate('Missing'), statusNr: 11},
//     {color: '#f9b232', name: translate('Unknown'), statusNr: 1},
//     {color: '#b52733', name: translate('New'), statusNr: 31},
//   ];

//   const handleClickOnChartSectorOrLabel = (ind: number) => {
//     const clickedStatusName = handleCreateStatusObjectsForRenderInChart()[ind].name;
//     const [getStatusNumber] = statusColorsNamesAndNumbers.filter(color => color.name === clickedStatusName);
//     navigate(`/assets/search?status=${getStatusNumber.statusNr}`);
//   };

//   return (
//     <div style={{height: '100%'}} data-testid="statusChart">
//       <div style={{width: '100%', height: 400}}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               activeIndex={activeIndex as number}
//               activeShape={renderActiveShape}
//               data={handleCreateStatusObjectsForRenderInChart()}
//               cx="50%"
//               cy="50%"
//               innerRadius={BigTabletWidth || mobileWidth ? 70 : 110}
//               outerRadius={BigTabletWidth || mobileWidth ? 110 : 180}
//               fill="#8884d8"
//               dataKey="value"
//               onMouseEnter={onPieEnter}
//               onMouseLeave={() => setActiveIndex(null)}
//               onClick={() => handleClickOnChartSectorOrLabel(activeIndex as number)}
//             >
// {handleCreateStatusObjectsForRenderInChart()?.map((entry: IObjForChart, index: number) => {
//   const [statusColorForChart] = statusColorsNamesAndNumbers.filter(color => color.name === entry.name);
//   return <Cell key={`cell-${index}`} fill={statusColorForChart.color}/>;
// })}
// </Pie>
// </PieChart>
// </ResponsiveContainer>

// </div>
// <div style={{display: 'flex', justifyContent: 'center'}}>
// {handleCreateStatusObjectsForRenderInChart()?.map((el: IObjForChart, ind: number) => {
// const [statusColor] = statusColorsNamesAndNumbers.filter(statusItem => statusItem.name === el.name);
// return <div
// key={ind}
// style={{cursor: 'pointer'}}
// onMouseEnter={() => setActiveIndex(ind)}
// onMouseLeave={() => setActiveIndex(null)}
// onClick={() => handleClickOnChartSectorOrLabel(ind)}
// >
// <Label
// circular={true} style={{backgroundColor: statusColor.color}}
// empty={true}
// />
// <span key={ind + Math.random()} style={{marginRight: 20}}>
// {el.name}
// </span>
// </div>;
// })}
// </div>
// </div>

// );

// };

// export default StatusChart;
