
import DeploySection from "./DeploySection";
import LeftSideBar from "./LeftSideBar";
import NewInstanceForm from "./NewInstanceForm";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import axios from "axios";

function App({ regions, userInfo, operatingSystems }) {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedPlan, setSelectedPlanState] = useState(0);
  const [selectedOS, setSelectedOSState] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [allRegionPlans, setRegionPlans] = useState(null);
  const [enableIPv4,setEnableIPv4State]= useState(false)
  let planPrice = 5;
  let totalPrice = 5;
  if (allRegionPlans) {
    planPrice = allRegionPlans[selectedPlan].monthly_price;
    totalPrice = quantity*planPrice;
  }
  function loadPlans(res) {
    setSelectedPlanState(0);
    setRegionPlans(res.data);
  }
  function setEnableIPv4(e) {
  setEnableIPv4State(!enableIPv4)
  }
  function catcherror(error) {
    alert(error);
  }
  const newSelectedRegion = (item) => () => {
    setSelectedRegion(item.item);
    axios
      .get(`/JSONS/plans/${item.item.name}.json`)
      .then(loadPlans)
      .catch(catcherror);
  };

  const setSelectedPlan = (index) => () => {
    setSelectedPlanState(index);
  };
  function deployNow() {
    console.log(
      "%cExtracted Information",
      "color: #007acc;",
      JSON.stringify(
        {
          userInfo,
          Region: selectedRegion,
          Plan: allRegionPlans[selectedPlan],
          operatingSystem: operatingSystems[selectedOS],
          IPv4: { state: enableIPv4 },
          totalPrice: totalPrice.toFixed(2),
        },
        null,
        "\t"
      )
    );
  }

  const setSelectedOS = (index) => () => {
    setSelectedOSState(index);
  };

  if (!allRegionPlans) {
    axios
      .get(`/JSONS/plans/${selectedRegion.name}.json`)
      .then(loadPlans)
      .catch(catcherror);
  } else {
    return (
      <div className="App">
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <LeftSideBar side="left" />
          <NewInstanceForm
            regions={regions}
            operatingSystems={operatingSystems}
            newSelectedRegion={newSelectedRegion}
            regionPlans={allRegionPlans}
            setSelectedPlan={setSelectedPlan}
            selectedPlan={selectedPlan}
            selectedOS={selectedOS}
            setSelectedOS={setSelectedOS}
            OSfamily={operatingSystems[selectedOS].family}
            quantity={quantity}
            region={selectedRegion}
            plan={allRegionPlans[selectedPlan]}
          />
          <DeploySection
            profile={userInfo}
            planPrice={planPrice}
            setQuantity={setQuantity}
            quantity={quantity}
            deployFunc={deployNow}
            enableIPv4={enableIPv4}
            setEnableIPv4={setEnableIPv4}
          />
        </Box>
      </div>
    );
  }
}

export default App;
