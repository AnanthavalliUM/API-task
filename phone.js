const VerifyPhoneNumber = async () => {
    const phoneUrl = "https://api.veriphone.io/v2/verify";
const apiKey ="1BC6386B887F453290EF13D1E80F5E45";

    const phoneinput = document.getElementById("num-inp").value;
    const response = await fetch(`${phoneUrl}?phone=${phoneinput}&key=${apiKey}`);
    const data = await response.json();

    const detailelement = document.getElementById('details')
    detailelement.innerText = `Phone Type - ${data.phone_type}
    Phone region - ${data.phone_region}
    Country - ${data.country}
    Country code - ${data.country_code}
    Country prefix - ${data.country_prefix}
  `
phoneinput.innerHTML = "";
    
}
