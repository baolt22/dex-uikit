/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const NFA: React.FC<SvgProps> = ({ direction = "right", color = "text", width, getStyles }) => {
  const deg: rotation = {
    left: 180,
    up: 270,
    right: 0,
    down: 90,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "24"} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M21.1525 13.0931H20.6684V12.0984H20.1682V11.6186H19.155V12.0984H18.1546V10.6176H17.6544V9.12409H17.1478L16.8349 8.97942L16.3335 8.87891L16.1831 8.9787L15.9157 8.87891L15.6817 8.97873L15.5146 8.87891H15.2137L14.9129 8.97894L14.5619 8.87882L13.9602 8.87873H13.4421L12.9072 8.97894H12.3724H12.1886L11.5702 8.87866H10.9852L10.5506 8.97894H10.0659L9.56453 8.87866H8.66199H8.04452H7.47533L5.02403 9.11138H4.51741V10.6049H4.03337V12.0984H3.02009V11.6186H2.00359V12.0984H1.5002V13.0899H1V14.0813H1.5002V15.076H2.00359V15.5717H2.50701V16.0611H3.01363V19.0481H3.51383V20.0427H4.01722V20.5353H4.52387V21.0342H5.02403V21.5331H5.53069V22.0225H6.03731V22.5214H6.5375V23.0298H7.04735V23.5255H7.55078V24.0212H8.05417V24.5201H9.06421V25H13.1044V24.5201H14.1144V24.0212H14.6179V23.5287H15.1213V23.033H15.6182V22.5436H16.1184V22.0447H16.6186V21.5522H17.1252V21.0501H17.6222V20.5512H18.1288V20.0618H18.6354V19.0481H19.1421V16.0769H19.6552V15.5717H20.1682V15.076H20.6749V14.0909H21.1589L21.1525 13.0931Z"
        fill="#4D4040"
      />
      <path
        d="M6.31825 0.287848V0.575722H6.03106H5.74387V0.863592V1.15146H5.45667H5.16948V1.7272V2.30295H4.88229H4.59509V3.45443V4.60591H4.3079H4.02071V5.75739V6.90888H3.73351H3.44632V7.77249V8.6361H3.15913H2.87193V8.92397V9.21184H2.58474H2.29755V8.92397V8.6361H1.43597H0.574387V8.92397V9.21184H0.287193H0V9.49971V9.78758H0.287193H0.574387V10.0755V10.3633H2.01035H3.44632L10.9133 10.6512L18.3804 10.3633H19.8163H21.2523V10.0755V9.78758H21.5395H21.8267V9.49971V9.21184H21.5395H21.2523V8.92397V8.6361H20.3907H19.5291V8.92397V9.21184H19.242H18.9548V8.92397V8.6361H18.6676H18.3804V7.77249V6.90888H18.0932H17.806V5.75739V4.60591H17.5188H17.2316V3.45443V2.30295H16.9444H16.6572V1.7272V1.15146H16.37H16.0828V0.863592V0.575722H15.7956H15.5084V0.287848V-2.00272e-05H14.3597H13.2109V0.287848V0.575722H12.3493H11.4877V0.863592V1.15146H10.9133H10.339V0.863592V0.575722H9.47738H8.6158V0.287848V-2.00272e-05H7.46703H6.31825V0.287848Z"
        fill="#4D4040"
      />
      <rect x="4" y="10.1377" width="14.4157" height="7.11492" fill="#e7eff9" />
      <rect x="5.20166" y="11.323" width="12.013" height="4.74328" fill="#4D4040" />
      <rect x="10.0002" y="17" width="2" height="1" fill="#e7eff9" />
      <path
        d="M7.00024 21.1062V19.7722V18.4381H7.23082H7.4614V18.6605V18.8828H7.69197H7.96484V19.1052V19.3275H8.15312H8.3837V19.5499V19.7722H11.1506H13.9175V19.5499V19.3275H14.1481H14.3555V19.1052V18.8828H14.6093H14.8398V18.6605V18.4381H15.0704H15.301V21.1062H15.0704H14.8398V21.3286V21.5509H14.6093H14V21.7733V21.9956H8V21.7733V21.5509H7.69197H7.4614V21.3286V21.1062H7.23082H7.00024Z"
        fill="#e7eff9"
      />
    </svg>
  );
};

export default NFA;
