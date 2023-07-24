import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Checkdata from "../data/Checkdata";
import { JsonConverter } from "../functions";
import { Subdepthelper } from "../functions";
import { countAllSubitems } from "../functions";
import Button from "@mui/material/Button";

const Firstcheck = ({ ind, lab }) => {
  let arr = JsonConverter(Checkdata);

  const [checkedItems, setCheckedItems] = useState(Subdepthelper(arr, ind)[0]);

  const [toggle, setToggle] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange1 = (e) => {
    console.log(checkedItems);
    setCheckedItems((previtems) => {
      const obj2 = {};
      for (let key in previtems) {
        if (previtems.hasOwnProperty(key)) {
          obj2[key] = e.target.checked;
        }
      }
      return obj2;
    });
  };

  const helperToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="flex1">
      <ul style={{ listStyle: "none", padding: 0 }}>
        <FormGroup>
          <li className="buttonandcheck">
            <div className="controller">
              <Button
                variant="contained"
                onClick={helperToggle}
                sx={{ height: 30, margintop: 10, padding: 0 }}
              >
                {toggle ? <RemoveIcon></RemoveIcon> : <AddIcon></AddIcon>}
              </Button>
            </div>

            <div className="flex2">
              <FormControlLabel
                control={
                  <Checkbox
                    id="item1"
                    name="customer_service"
                    value="customer"
                    onChange={handleCheckboxChange1}
                  />
                }
                label={lab}
              />
              <div style={{ display: "inline", paddingTop: "2px" }}>
                {`(${countAllSubitems(checkedItems)})`}
              </div>

              {toggle && (
                <ul style={{ listStyle: "none", paddingLeft: "70px" }}>
                  {arr[ind].sub_departments.map((item, key) => {
                    console.log(item);
                    return (
                      <li key={key}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id={key}
                              name={item}
                              value={`sub ${item}`}
                              checked={checkedItems[item]}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label={item}
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </li>
        </FormGroup>
      </ul>
    </div>
  );
};

export default Firstcheck;
