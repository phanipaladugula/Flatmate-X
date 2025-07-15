import React, { useState } from 'react';
import SidebarCheckboxGroup from './SidebarCheckboxGroup';
import SidebarRangeSlider from './SidebarRangeSlider';

const FilterUI = () => {
  const [selectedConditioning, setSelectedConditioning] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([]);
  const [age, setAge] = useState(18);
  const [selectedSleepSchedule, setSelectedSleepSchedule] = useState([]);
  const [selectedHabits, setSelectedHabits] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);

  const handleCheckboxChange = (option, setState) => {
    setState((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="font-segoe-ui">
      <h3 className="text-2xl font-bold mb-sidebar-h3-mb text-main-dark-brown">Filters</h3>
      
      <SidebarCheckboxGroup
        label="Conditioning" iconClass="fas fa-wind" options={['AC', 'Non-AC']}
        selected={selectedConditioning} onChange={(o) => handleCheckboxChange(o, setSelectedConditioning)}
      />
      <SidebarCheckboxGroup
        label="Gender" iconClass="fas fa-venus-mars" options={['Male', 'Female']}
        selected={selectedGender} onChange={(o) => handleCheckboxChange(o, setSelectedGender)}
      />
      <SidebarCheckboxGroup
        label="Diet" iconClass="fas fa-carrot" options={['Vegetarian', 'Non-Vegetarian']}
        selected={selectedDiet} onChange={(o) => handleCheckboxChange(o, setSelectedDiet)}
      />
      <SidebarRangeSlider
        label="Age" iconClass="fas fa-child-reaching" min={18} max={100} value={age} onChange={setAge}
      />
      <SidebarCheckboxGroup
        label="Sleep Schedule" iconClass="fas fa-clock" options={['Early Bird', 'Night Owl']}
        selected={selectedSleepSchedule} onChange={(o) => handleCheckboxChange(o, setSelectedSleepSchedule)}
      />
      <SidebarCheckboxGroup
        label="Habits" iconClass="fas fa-layer-group" options={['Musician', 'Nerd', 'Smoker', 'Non-Smoker']}
        selected={selectedHabits} onChange={(o) => handleCheckboxChange(o, setSelectedHabits)}
      />
      <SidebarCheckboxGroup
        label="Price Range" iconClass="fas fa-indian-rupee-sign"
        options={['Under ₹7,000', '₹7,000–₹20,000', '₹20,000–₹50,000', '₹50,000–₹1,00,000', 'Over ₹1,00,000']}
        selected={selectedPriceRange} onChange={(o) => handleCheckboxChange(o, setSelectedPriceRange)}
      />
    </div>
  );
};

export default FilterUI;