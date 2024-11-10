import React, { useEffect, useState } from "react";

const Tabs= (props)=>{
    const[tabHeader, setTabHeader] = useState([])
    const[contenMap, setContentMap] = useState({});
    const [active , setActive] = useState('');
    const {children}= props;

    useEffect(()=>{
        const headers= [];
        const map = {};
        React.Children.forEach(children,(element)=>{
            if(!React.isValidElement(element))
                return;
            const {title}= element.props;
            headers.push(title);
            map[title]= element.props.children;
        })
        setTabHeader(headers); //for header 
        setActive(headers[0]);
        setContentMap(map);

    },[props, children]);

    const changeTab=(header)=>{
         setActive(header);
    }
    return (
        <div>
            <div className="flex justify-center items-center mt-2 ">
                {
                    tabHeader.map((header)=>(
                        <button className=" bg-slate-400 p-3
                         hover:bg-slate-500 border-r
                          border-gray-600 rounded-md m-2"
                         key={header}
                         onClick={()=>changeTab(header)}
                        >
                        {header}</button>
                    ))
                }
            </div>
            {
               Object.keys(contenMap).map((key,index)=>{
                if(key === active){
                  return  <div key={index}>
                         {contenMap[key]}
                    </div>
                }
                else{
                    return null;
                }
                 
               })
            }


        </div>
    )
}

export default Tabs;