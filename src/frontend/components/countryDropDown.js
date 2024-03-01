import React, { useEffect, useState } from "react";
function CountryDropdown({ onCountryChange ,selectedCountry }) {

    const [country, setCountry] = useState(selectedCountry || '');

    useEffect(() => {
        setCountry(selectedCountry || ''); // Update state when selectedCountry prop changes
      }, [selectedCountry]);
    
      const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        onCountryChange(selectedCountry);
      };
    return (

        <div className="select-option">
            <select
               
                className="select-id"
        value={country}
        onChange={handleCountryChange}
            > <option placeholder="" value="COUNTRY">COUNTRY</option>
                <option value="abu-dhabi">
                    Abu Dhabi                </option>
                <option value="afghanistan">
                    Afghanistan                </option>
                <option value="albania">
                    Albania                </option>
                <option value="algeria">
                    Algeria                </option>
                <option value="american-samoa">
                    American Samoa                </option>
                <option value="andorra">
                    Andorra                </option>
                <option value="angola">
                    Angola                </option>
                <option value="anguilla">
                    Anguilla                </option>
                <option value="antarctica">
                    Antarctica                </option>
                <option value="antigua-and-barbuda">
                    Antigua and Barbuda                </option>
                <option value="argentina">
                    Argentina                </option>
                <option value="armenia">
                    Armenia                </option>
                <option value="aruba">
                    Aruba                </option>
                <option value="australia">
                    Australia                </option>
                <option value="austria">
                    Austria                </option>
                <option value="azerbaijan">
                    Azerbaijan                </option>
                <option value="bahamas">
                    Bahamas                </option>
                <option value="bahrain">
                    Bahrain                </option>
                <option value="bali">
                    Bali                </option>
                <option value="bangladesh">
                    Bangladesh                </option>
                <option value="barbados">
                    Barbados                </option>
                <option value="belarus">
                    Belarus                </option>
                <option value="belgium">
                    Belgium                </option>
                <option value="belize">
                    Belize                </option>
                <option value="benin">
                    Benin                </option>
                <option value="bermuda">
                    Bermuda                </option>
                <option value="bhutan">
                    Bhutan                </option>
                <option value="bolivia">
                    Bolivia                </option>
                <option value="bosnia-and-herzegovina">
                    Bosnia and Herzegovina                </option>
                <option value="botswana">
                    Botswana                </option>
                <option value="bouvet-island">
                    Bouvet Island                </option>
                <option value="brazil">
                    Brazil                </option>
                <option value="british-indian-ocean-territory">
                    British Indian Ocean Territory                </option>
                <option value="brunei-darussalam">
                    Brunei Darussalam                </option>
                <option value="bulgaria">
                    Bulgaria                </option>
                <option value="burkina-faso">
                    Burkina Faso                </option>
                <option value="burundi">
                    Burundi                </option>
                <option value="cambodia">
                    Cambodia                </option>
                <option value="cameroon">
                    Cameroon                </option>
                <option value="canada">
                    Canada                </option>
                <option value="cape-verde">
                    Cape Verde                </option>
                <option value="cayman-islands">
                    Cayman Islands                </option>
                <option value="central-african-republic">
                    Central African Republic                </option>
                <option value="chad">
                    Chad                </option>
                <option value="chile">
                    Chile                </option>
                <option value="china">
                    China                </option>
                <option value="christmas-island">
                    Christmas Island                </option>
                <option value="cocos-(keeling)-islands">
                    Cocos (Keeling) Islands                </option>
                <option value="colombia">
                    Colombia                </option>
                <option value="columbia">
                    Columbia                </option>
                <option value="comoros">
                    Comoros                </option>
                <option value="congo">
                    Congo                </option>
                <option value="congo,-the-democratic-republic-of-the">
                    Congo, the Democratic Republic of the                </option>
                <option value="cook-islands">
                    Cook Islands                </option>
                <option value="costa-rica">
                    Costa Rica                </option>
                <option value="cote-d'ivoire">
                    Cote D'Ivoire                </option>
                <option value="croatia">
                    Croatia                </option>
                <option value="cuba">
                    Cuba                </option>
                <option value="cyprus">
                    Cyprus                </option>
                <option value="czech-republic">
                    Czech Republic                </option>
                <option value="denmark">
                    Denmark                </option>
                <option value="djibouti">
                    Djibouti                </option>
                <option value="dominica">
                    Dominica                </option>
                <option value="dominican-republic">
                    Dominican Republic                </option>
                <option value="dubai">
                    Dubai                </option>
                <option value="ecuador">
                    Ecuador                </option>
                <option value="egypt">
                    Egypt                </option>
                <option value="el-salvador">
                    El Salvador                </option>
                <option value="equatorial-guinea">
                    Equatorial Guinea                </option>
                <option value="eritrea">
                    Eritrea                </option>
                <option value="estonia">
                    Estonia                </option>
                <option value="ethiopia">
                    Ethiopia                </option>
                <option value="falkland-islands-(malvinas)">
                    Falkland Islands (Malvinas)                </option>
                <option value="faroe-islands">
                    Faroe Islands                </option>
                <option value="fiji">
                    Fiji                </option>
                <option value="finland">
                    Finland                </option>
                <option value="france">
                    France                </option>
                <option value="french-guiana">
                    French Guiana                </option>
                <option value="french-polynesia">
                    French Polynesia                </option>
                <option value="french-southern-territories">
                    French Southern Territories                </option>
                <option value="gabon">
                    Gabon                </option>
                <option value="gambia">
                    Gambia                </option>
                <option value="georgia">
                    Georgia                </option>
                <option value="germany">
                    Germany                </option>
                <option value="ghana">
                    Ghana                </option>
                <option value="gibraltar">
                    Gibraltar                </option>
                <option value="greece">
                    Greece                </option>
                <option value="greenland">
                    Greenland                </option>
                <option value="grenada">
                    Grenada                </option>
                <option value="guadeloupe">
                    Guadeloupe                </option>
                <option value="guam">
                    Guam                </option>
                <option value="guatemala">
                    Guatemala                </option>
                <option value="guinea">
                    Guinea                </option>
                <option value="guinea-bissau">
                    Guinea-Bissau                </option>
                <option value="guyana">
                    Guyana                </option>
                <option value="haiti">
                    Haiti                </option>
                <option value="hanoi">
                    Hanoi                </option>
                <option value="heard-island-and-mcdonald-islands">
                    Heard Island and Mcdonald Islands                </option>
                <option value="holy-see-(vatican-city-state)">
                    Holy See (Vatican City State)                </option>
                <option value="honduras">
                    Honduras                </option>
                <option value="hong-kong">
                    Hong Kong                </option>
                <option value="honk-kong">
                    Honk Kong                </option>
                <option value="hungary">
                    Hungary                </option>
                <option value="iceland">
                    Iceland                </option>
                <option value="india">
                    India                </option>
                <option value="indonesia">
                    Indonesia                </option>
                <option value="iran,-islamic-republic-of">
                    Iran, Islamic Republic of                </option>
                <option value="iraq">
                    Iraq                </option>
                <option value="ireland">
                    Ireland                </option>
                <option value="israel">
                    Israel                </option>
                <option value="italy">
                    Italy                </option>
                <option value="jamaica">
                    Jamaica                </option>
                <option value="japan">
                    Japan                </option>
                <option value="jordan">
                    Jordan                </option>
                <option value="kazakhstan">
                    Kazakhstan                </option>
                <option value="kenya">
                    Kenya  </option>
                <option value="kiribati">
                    Kiribati                </option>
                <option value="korea,-democratic-people's-republic-of">
                    Korea, Democratic People's Republic of                </option>
                <option value="korea,-republic-of">
                    Korea, Republic of                </option>
                <option value="kuwait">
                    Kuwait                </option>
                <option value="kyrgyzstan">
                    Kyrgyzstan                </option>
                <option value="lao-people's-democratic-republic">
                    Lao People's Democratic Republic                </option>
                <option value="laos">
                    Laos                </option>
                <option value="latvia">
                    Latvia                </option>
                <option value="lebanon">
                    Lebanon                </option>
                <option value="lesotho">
                    Lesotho                </option>
                <option value="liberia">
                    Liberia                </option>
                <option value="libyan-arab-jamahiriya">
                    Libyan Arab Jamahiriya                </option>
                <option value="liechtenstein">
                    Liechtenstein                </option>
                <option value="lithuania">
                    Lithuania                </option>
                <option value="luxembourg">
                    Luxembourg                </option>
                <option value="macao">
                    Macao                </option>
                <option value="macedonia,-the-former-yugoslav-republic-of">
                    Macedonia, the Former Yugoslav Republic of                </option>
                <option value="madagascar">
                    Madagascar                </option>
                <option value="malawi">
                    Malawi                </option>
                <option value="malaysia">
                    Malaysia                </option>
                <option value="maldives">
                    Maldives                </option>
                <option value="mali">
                    Mali                </option>
                <option value="malta">
                    Malta                </option>
                <option value="marshall-islands">
                    Marshall Islands                </option>
                <option value="martinique">
                    Martinique                </option>
                <option value="mauritania">
                    Mauritania                </option>
                <option value="mauritius">
                    Mauritius                </option>
                <option value="mayotte">
                    Mayotte                </option>
                <option value="mexico">
                    Mexico                </option>
                <option value="micronesia,-federated-states-of">
                    Micronesia, Federated States of                </option>
                <option value="moldova,-republic-of">
                    Moldova, Republic of                </option>
                <option value="monaco">
                    Monaco                </option>
                <option value="mongolia">
                    Mongolia                </option>
                <option value="montserrat">
                    Montserrat                </option>
                <option value="morocco">
                    Morocco                </option>
                <option value="mozambique">
                    Mozambique                </option>
                <option value="myanmar">
                    Myanmar                </option>
                <option value="namibia">
                    Namibia                </option>
                <option value="nauru">
                    Nauru                </option>
                <option value="nepal">
                    Nepal                </option>
                <option value="netherlands">
                    Netherlands                </option>
                <option value="netherlands-antilles">
                    Netherlands Antilles                </option>
                <option value="new-caledonia">
                    New Caledonia                </option>
                <option value="new-zealand">
                    New Zealand                </option>
                <option value="new-zealand">
                    New-Zealand                </option>
                <option value="nicaragua">
                    Nicaragua                </option>
                <option value="niger">
                    Niger                </option>
                <option value="nigeria">
                    Nigeria                </option>
                <option value="niue">
                    Niue                </option>
                <option value="norfolk-island">
                    Norfolk Island                </option>
                <option value="northern-mariana-islands">
                    Northern Mariana Islands                </option>
                <option value="norway">
                    Norway                </option>
                <option value="oman">
                    Oman                </option>
                <option value="pakistan">
                    Pakistan                </option>
                <option value="palau">
                    Palau                </option>
                <option value="palestinian-territory,-occupied">
                    Palestinian Territory, Occupied                </option>
                <option value="panama">
                    Panama                </option>
                <option value="papua-new-guinea">
                    Papua New Guinea                </option>
                <option value="paraguay">
                    Paraguay                </option>
                <option value="peru">
                    Peru                </option>
                <option value="philippines">
                    Philippines                </option>
                <option value="pitcairn">
                    Pitcairn                </option>
                <option value="poland">
                    Poland                </option>
                <option value="portugal">
                    Portugal                </option>
                <option value="puerto-rico">
                    Puerto Rico                </option>
                <option value="qatar">
                    Qatar                </option>
                <option value="reunion">
                    Reunion                </option>
                <option value="romania">
                    Romania                </option>
                <option value="russia">
                    Russia                </option>
                <option value="russian-federation">
                    Russian Federation                </option>
                <option value="rwanda">
                    Rwanda                </option>
                <option value="saint-helena">
                    Saint Helena                </option>
                <option value="saint-kitts-and-nevis">
                    Saint Kitts and Nevis                </option>
                <option value="saint-lucia">
                    Saint Lucia                </option>
                <option value="saint-pierre-and-miquelon">
                    Saint Pierre and Miquelon                </option>
                <option value="saint-vincent-and-the-grenadines">
                    Saint Vincent and the Grenadines                </option>
                <option value="samoa">
                    Samoa                </option>
                <option value="san-marino">
                    San Marino                </option>
                <option value="sao-tome-and-principe">
                    Sao Tome and Principe                </option>
                <option value="saudi-arabia">
                    Saudi Arabia                </option>
                <option value="senegal">
                    Senegal                </option>
                <option value="serbia-and-montenegro">
                    Serbia and Montenegro                </option>
                <option value="seychelles">
                    Seychelles                </option>
                <option value="sierra-leone">
                    Sierra Leone                </option>
                <option value="singapore">
                    Singapore                </option>
                <option value="slovakia">
                    Slovakia                </option>
                <option value="slovenia">
                    Slovenia                </option>
                <option value="solomon-islands">
                    Solomon Islands                </option>
                <option value="somalia">
                    Somalia                </option>
                <option value="south-africa">
                    South Africa                </option>
                <option value="south-georgia-and-the-south-sandwich-islands">
                    South Georgia and the South Sandwich Islands                </option>
                <option value="south-korea">
                    South Korea                </option>
                <option value="spain">
                    Spain                </option>
                <option value="sri-lanka">
                    Sri Lanka                </option>
                <option value="sudan">
                    Sudan                </option>
                <option value="suriname">
                    Suriname                </option>
                <option value="svalbard-and-jan-mayen">
                    Svalbard and Jan Mayen                </option>
                <option value="swaziland">
                    Swaziland                </option>
                <option value="sweden">
                    Sweden                </option>
                <option value="switzerland">
                    Switzerland                </option>
                <option value="syrian-arab-republic">
                    Syrian Arab Republic                </option>
                <option value="taiwan,-province-of-china">
                    Taiwan, Province of China                </option>
                <option value="tajikistan">
                    Tajikistan                </option>
                <option value="tanzania">
                    Tanzania                </option>
                <option value="tanzania,-united-republic-of">
                    Tanzania, United Republic of                </option>
                <option value="thailand">
                    Thailand                </option>
                <option value="timor-leste">
                    Timor-Leste                </option>
                <option value="togo">
                    Togo                </option>
                <option value="tokelau">
                    Tokelau                </option>
                <option value="tonga">
                    Tonga                </option>
                <option value="trinidad-and-tobago">
                    Trinidad and Tobago                </option>
                <option value="tunisia">
                    Tunisia                </option>
                <option value="turkey">
                    Turkey                </option>
                <option value="turkmenistan">
                    Turkmenistan                </option>
                <option value="turks-and-caicos-islands">
                    Turks and Caicos Islands                </option>
                <option value="tuvalu">
                    Tuvalu                </option>
                <option value="uganda">
                    Uganda                </option>
                <option value="ukraine">
                    Ukraine                </option>
                <option value="united-arab-emirates">
                    United Arab Emirates                </option>
                <option value="United Kingdom">
                    United Kingdom                </option>
                <option value="united-states-minor-outlying-islands">
                    United States Minor Outlying Islands                </option>
                <option value="uruguay">
                    Uruguay                </option>
                <option value="usa">
                    USA                </option>
                <option value="uzbekistan">
                    Uzbekistan                </option>
                <option value="vanuatu">
                    Vanuatu                </option>
                <option value="venezuela">
                    Venezuela                </option>
                <option value="viet-nam">
                    Viet Nam                </option>
                <option value="vietnam">
                    Vietnam                </option>
                <option value="virgin-islands,-british">
                    Virgin Islands, British                </option>
                <option value="virgin-islands,-u.s.">
                    Virgin Islands, U.s.                </option>
                <option value="wallis-and-futuna">
                    Wallis and Futuna                </option>
                <option value="western-sahara">
                    Western Sahara                </option>
                <option value="yemen">
                    Yemen                </option>
                <option value="zambia">
                    Zambia                </option>
                <option value="zimbabwe">
                    Zimbabwe                </option>

            </select>
        </div>


);
}
export default CountryDropdown;