import React , { useState, useEffect, useContext} from "react";

//Internal import
import{
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../Components/index";
import { TrackingContext } from '@/Context/Tracking';


const index = () => {
const{
  currentUser, // address of whoever will interact with the application
  createShipment,
  getAllShipment,
  completeShipment,
  getShipment,
  startShipment,
  getShipmentsCount,
} = useContext(TrackingContext);

//State variable in this we store datas
const [createShipmentModel, setCreateShipmentModel] = useState(false);
const [openProfile, setOpenProfile] = useState(false);
const [startModal, setStartModal] = useState(false);
const [completeModal, setCompleteModal] = useState(false);
const [getModel, setGetModel] = useState(false);

//Data State Variable
const [allShipmentsdata, setallShipmentsdata] = useState(); // this will be in form of arrays so will store that one

useEffect(() => {
  const getCampaignsData = getAllShipment();

  return async () => {
    const allData = await getCampaignsData;
    setallShipmentsdata(allData);

  };
}, []);

return(
  <>
    <Services 
    setOpenProfile={setOpenProfile}
    setCompleteModal={setCompleteModal}
    setGetModel={setGetModel}
    setStartModal={setStartModal}
    />

    <Table 
    setCreateShipmentModel={setCreateShipmentModel}
    allShipmentsdata={allShipmentsdata}
    />

    <Form 
    createShipmentModel={createShipmentModel}
    createShipment={createShipment}
    setCreateShipmentModel={setCreateShipmentModel}
    />

    <Profile
      openProfile={openProfile}
      setOpenProfile={setOpenProfile} 
      currentUser={currentUser}
      getShipmentsCount={getShipmentsCount}
      />

      <CompleteShipment 
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
        />

        <GetShipment 
          getModel={getModel}
          setGetModel={setGetModel}
          getShipment={getShipment}
          />

          <StartShipment 
          startModal={startModal}
          setStartModal={setStartModal}
          startShipment={startShipment}
          />

  </>
);
};


export default index;