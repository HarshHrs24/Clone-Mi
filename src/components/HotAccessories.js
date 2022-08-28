import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"

const HotAccessories = (music,musicCover) => {
  return (
    <div  className="HotAccessories">
      <div>
               <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/500BFA0B-CBEF-5DFF-79A9-E925F9F2FEE9.jpg" alt="Cover" />
      </div>

    
      <div>
            {
             <HotItemCard key="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1551164869.57618003.jpg"  name="Cases & Covers" price="₹ 49 onwards" image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1551164869.57618003.jpg" index="1"/>        
            }
            {
             <HotItemCard key="https://i01.appmifile.com/webfile/globalimg/in/cms/5A5AA9AC-41A3-7E86-5922-928B312919B0.jpg"  name="Charger & USB Gadgets" price="₹ 179 onwards" image="https://i01.appmifile.com/webfile/globalimg/in/cms/5A5AA9AC-41A3-7E86-5922-928B312919B0.jpg" index="2"/>        
            }
            {
             <HotItemCard key="https://i01.appmifile.com/webfile/globalimg/in/cms/3CBAACCE-D18A-B241-A4F8-54A4CCE194A5.jpg"  name="Mi Wireless Power Bank 10000mAh" price="₹ 2,499" image="https://i01.appmifile.com/webfile/globalimg/in/cms/3CBAACCE-D18A-B241-A4F8-54A4CCE194A5.jpg" index="3"/>        
            }
            {
             <HotItemCard key="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600434881.35114664.jpg?width=420&height=420"  name="10000mAh Mi Power Bank 3i" price="₹ 2,499" image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600434881.35114664.jpg?width=420&height=420" index="4"/>        
            }
            {
             <HotItemCard key="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1601900775.75794078.png?width=420&height=420"  name="Redmi SonicBass Wireless Earphones" price="₹ 1,299" image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1601900775.75794078.png?width=420&height=420" index="5"/>        
            }
            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            
      </div>
    </div>
  )
}

export default HotAccessories