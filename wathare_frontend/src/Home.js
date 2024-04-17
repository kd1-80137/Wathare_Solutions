// import React, { useEffect, useState } from 'react';
// import './style.css';
// import axios from 'axios';

// function Home() {
//     const [datas, setDatas] = useState([]);
//     const [data,setData]= useState({_id:"",ts:"",machine_status:"", vibration:""});
//     const [errorMsg, setErrorMsg] = useState("");
//     const [interval, setInterval] = useState(24);
    
//     const fetchData = () => {
//         var url = "http://127.0.0.1:5000/api/v1/wather-solution/get";
//         axios.get(url)
//             .then((result) => {
//                 setDatas(result.data);
//             })
//             .catch((error) => {
//                 setErrorMsg("Unable to fetch data");
//             });
//     }

//     const clearError = () => {
//         setErrorMsg("");
//     }

//     const OneHr = () => {
//         setInterval(1);
//     }

//     const EightHr = () => {
//         setInterval(8);
//     }
//     const TwoFourhr=()=>{
//         setInterval(24);
//     }

//     const Ts=(timeStamp)=>{
//         //splitting the timestamp
//         var splitTime= timeStamp.split('T');
//         var eTime =splitTime.substring(0,2);
//         if(eTime%interval ===0){;
//             return true 
//         }
//         return false;

//     }

    

//     useEffect(() => {
//         fetchData();
//     }, []); 
//     // Empty dependency array to fetch data only once when the component mounts
    
//     return (
//         <div>
//             <h3>Machine vibrations</h3>
//             <hr />
//             <div>
//                 <button onClick={OneHr()} className='right-corner-text'>1 hr</button>
//                 <button onClick={EightHr()} className='right-corner-text1'>8 hr</button>
//                 <button  onClick={TwoFourhr()} className='right-corner-text2'>24 hr</button>
//             </div>
//             <h5>Cycle Status</h5>
//             <div className='st'>
//                 <ul>
//                     {datas.map((data) => {
//                         let listItemClassName;
//                         if (data.machine_status === 0) {
//                             listItemClassName = 'list2';
//                         } else if (data.machine_status === 1) {
//                             listItemClassName = 'list3';
//                         } else {
//                             listItemClassName = 'list1';
//                         }
//                         return <li key={data._id} className={listItemClassName}></li>;
//                     })}
//                 </ul>
//             </div>
//             <div>
//             <div className='st'>
//   <ul>
//     {datas.map((data) => {
//         var i=0;
//       if (Ts(data.ts)) {
//         <li className='eL'>{interval*i++}</li>;
//       } else  {
//          <li className='eM'></li>;
//       } 
//     })}
//   </ul>
// </div>

//             </div>
//             <h4>Current Time Interval: {interval} hr</h4>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  

function Home() {
    const [datas, setDatas] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [interval, setInterval] = useState(24);
    
    const fetchData = () => {
        var url = "http://127.0.0.1:5000/api/v1/wather-solution/get";
        axios.get(url)
            .then((result) => {
                setDatas(result.data.data);
                console.log(result.data.data)
            })
            .catch((error) => {
                setErrorMsg("Unable to fetch data");
            });
    }

    const OneHr = () => {
        setInterval(1);
    }

    const EightHr = () => {
        setInterval(8);
    }
    const TwoFourhr=()=>{
        setInterval(24);
    }

    const Ts = (timeStamp) => {
        // Splitting the timestamp
        var splitTime = timeStamp[0].split('T');
        var eTime = splitTime[0].substring(0, 2);
        if (parseInt(eTime) % interval === 0) {
            return true;
        }
        return false;
    }
    const TimeGet=(timestamp)=>{
        var splitTime= timestamp.split('T');
        var eTime= splitTime[0].substring(0,2);
        return eTime;

    }

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div>
            <h3>Machine vibrations</h3>
            <hr />
            <div>
                <button onClick={OneHr} className='right-corner-text'>1 hr</button>
                <button onClick={EightHr} className='right-corner-text1'>8 hr</button>
                <button onClick={TwoFourhr} className='right-corner-text2'>24 hr</button>
            </div><br>
            </br>
            <h5>Cycle Status</h5>
            <div>
                <ul className='df'>
                       { datas && Array.isArray(datas) && datas.map((data) => {
                        console.log("Hello");
                        var temp=new Array();
                            let listItemClassName;
                            if (data.machine_status === 0) {
                                listItemClassName = 'list2';
                            } else if (data.machine_status === 1) {
                                listItemClassName = 'list3';
                            } else {
                                listItemClassName = 'list1';
                            }
                              return<li key={data._id} className={listItemClassName}></li>;
                        })}
                        {/* :
                        <h5>Unable To Fetch Data</h5>  */}
                </ul>
            </div>
            <div >
                <ul className='df'>
                   
                   
                { datas && Array.isArray(datas) && datas.map((data, index) => {return(<>
                        <li key={data._id} className={Ts(data.ts) ? 'eL' : 'eM'}>
                            {Ts(data.ts) ? TimeGet(data.ts): ""}
                        </li></>)
                    })}
                
                </ul>
            </div>
            <h1>Current Time Interval: {interval} </h1>
        </div>
    );
}

export default Home;
