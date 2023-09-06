import{r,R as e}from"./index-8db94870.js";import{F as i}from"./FormField-afe4751b.js";import{S as n}from"./Spacing-8f1fefc8.js";import{R as V}from"./Radio-eff1c12d.js";import{I as l}from"./Input-937e196a.js";import{D as U}from"./DropDown-4e4984e9.js";import{T as Z}from"./TextArea-55669b2d.js";import{C as B}from"./Checkbox-f04ac294.js";import{L as N}from"./Link-7fa584b6.js";import{B as J}from"./Button-663a3c97.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./Icon-1127205c.js";import"./focus-d7245c50.js";import"./getDistanceToBottom-0a023c77.js";import"./tw-merge-b02e8c47.js";const _=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"}],de={title:"Compositions/Contact Form",component:i,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}},decorators:[K=>{const[c,o]=r.useState(""),[m,d]=r.useState(""),[u,g]=r.useState(""),[p,h]=r.useState(""),[C,b]=r.useState(""),[v,S]=r.useState(""),[E,f]=r.useState(""),[t,s]=r.useState(""),[y,z]=r.useState(""),[k,F]=r.useState(""),[q,w]=r.useState(""),[L,x]=r.useState(""),[D,M]=r.useState(""),[A,P]=r.useState({state1:!1,state2:!1,state3:!1});return e.createElement(K,{value:{gender:c,firstName:m,lastName:u,email:p,phone:C,company:v,street:E,houseNumber:t,postalCode:y,city:k,location:q,rentalDevice:L,message:D,multiChecked:A},setValue:{setGender:o,setFirstName:d,setLastName:g,setEmail:h,setPhone:b,setCompany:S,setStreet:f,setHouseNumber:s,setPostalCode:z,setCity:F,setLocation:w,setRentalDevice:x,setMessage:M,setMultiChecked:P}})}]},I={render:(K,c)=>{const{gender:o,firstName:m,lastName:d,email:u,phone:g,company:p,street:h,houseNumber:C,postalCode:b,city:v,location:S,rentalDevice:E,message:f,multiChecked:t}=c.value,{setGender:s,setFirstName:y,setLastName:z,setEmail:k,setPhone:F,setCompany:q,setStreet:w,setHouseNumber:L,setPostalCode:x,setCity:D,setLocation:M,setRentalDevice:A,setMessage:P,setMultiChecked:R}=c.setValue,O=!(t!=null&&t.state1)||!(t!=null&&t.state2)||!(t!=null&&t.state3)?"Alle Checkboxen sind obligatorisch":"";return e.createElement("form",{className:"zep-max-w-[648px]",onSubmit:a=>{alert(JSON.stringify({gender:o,firstName:m,lastName:d,email:u,phone:g,company:p,street:h,houseNumber:C,postalCode:b,city:v,location:S,rentalDevice:E,message:f,multiChecked:t})),a.preventDefault()}},e.createElement(n,{direction:"column",gap:"1"},e.createElement(n,{direction:"column",gap:"3"},e.createElement(n,{direction:"column",gap:"0"},e.createElement("h3",{className:"zep-typography-headlineLg"},"Ihre Kontaktdaten"),e.createElement(n,{direction:"column",gap:"0"},e.createElement(i,null,e.createElement(n,{gap:"1.5",direction:"row",className:"zep-my-1.5"},e.createElement(V,{id:"gender-male",name:"gender",label:"Herr",selected:o==="gender-male",value:o,onChange:()=>s("gender-male"),required:!0}),e.createElement(V,{id:"gender-female",name:"gender",label:"Frau",selected:o==="gender-female",value:o,onChange:()=>s("gender-female"),required:!0}),e.createElement(V,{id:"gender-diverse",name:"gender",label:"Divers",selected:o==="gender-diverse",value:o,onChange:()=>s("gender-diverse"),required:!0}))),e.createElement(i,null,e.createElement(n,{direction:"column",gap:"1"},e.createElement(l,{id:"first-name",placeholder:"Ihr Vorname",autoComplete:"vorname",label:"Vorname",value:m,onChange:a=>y(a.target.value)}),e.createElement(l,{id:"last-name",autoComplete:"name",label:"Name",placeholder:"Ihr Name",value:d,onChange:a=>z(a.target.value),required:!0}),e.createElement(l,{id:"email",placeholder:"Ihre E-Mail-Adresse",type:"email",autoComplete:"email",label:"E-Mail-Adresse",required:!0,value:u,onChange:a=>k(a.target.value)}),e.createElement(i,{message:"Supporting Text"},e.createElement(l,{id:"phone",placeholder:"Ihre Telefonnummer",autoComplete:"phone",label:"Phone here when ready",required:!0,value:g,onChange:a=>F(a.target.value)})))))),e.createElement(n,{direction:"column",gap:"1.5"},e.createElement("h3",{className:"zep-typography-headlineLg"},"Anschrift"),e.createElement(n,{direction:"column",gap:"0"},e.createElement(i,null,e.createElement(n,{direction:"column",gap:"1"},e.createElement(l,{id:"company",placeholder:"Ihr Unternehmen",autoComplete:"company",label:"Unternehmen",value:p,onChange:a=>q(a.target.value)}),e.createElement(n,{direction:"row",gap:"1.5"},e.createElement(l,{id:"street",placeholder:"Ihre Straße",autoComplete:"street",label:"Staße",value:h,onChange:a=>w(a.target.value),className:"zep-grow"}),e.createElement(l,{id:"house-number",placeholder:"Ihre Hausnummer",autoComplete:"house-number",label:"Nr.",value:C,onChange:a=>L(a.target.value)})),e.createElement(n,{direction:"row",gap:"1.5"},e.createElement(l,{id:"postal-code",placeholder:"Ihre PLZ",autoComplete:"postal-code",label:"PLZ",value:b,onChange:a=>x(a.target.value)}),e.createElement(l,{id:"city",placeholder:"Ihr Ort",autoComplete:"city",label:"Ort",required:!0,value:v,onChange:a=>D(a.target.value),className:"zep-grow"})),e.createElement(l,{id:"location",placeholder:"Ihr Einsatzort",autoComplete:"location",label:"PLZ Baustelle/Einsatzort",required:!0,value:S,onChange:a=>M(a.target.value)}))))),e.createElement(n,{direction:"column",gap:"1.5"},e.createElement("h3",{className:"zep-typography-headlineLg"},"Ihr Anliegen"),e.createElement(n,{direction:"column",gap:"0"},e.createElement(i,null,e.createElement(n,{direction:"column",gap:"1"},e.createElement(U,{items:_,placeholder:"Bitte wählen Sie das gewünschte Mietgerät",value:E,required:!0,onChange:a=>A(a)}),e.createElement(Z,{id:"message",label:"Nachricht",placeholder:"Ihre Nachricht",className:"zep-h-[168px]",value:f,onChange:a=>P(a.target.value)})),e.createElement(n,{direction:"column",gap:"0"},e.createElement(i,{id:"cool",message:O,state:"default"},e.createElement(n,{direction:"column",gap:"0.5"},e.createElement(B,{id:"accept-amb",checked:t==null?void 0:t.state1,onChange:()=>R({...t,state1:!(t!=null&&t.state1)}),name:"accept",required:!0},"Ich habe die ",e.createElement(N,{label:"AMB"}),", die ",e.createElement(N,{label:"Mietbedingungen für Kraftfahrzeuge"})," und die ",e.createElement(N,{label:"AVLB"})," zur Kenntnis genommen und bin mit deren Geltung einverstanden."),e.createElement(B,{id:"accept-datenschutz",checked:t==null?void 0:t.state2,onChange:()=>R({...t,state2:!(t!=null&&t.state2)}),name:"accept",required:!0},"Ich habe die ",e.createElement(N,{label:"Datenschutzerklärung"})," gelesen und willige in die Verwendung meiner Daten ein."),e.createElement(B,{id:"accept-konsumentenschutzgesetz",checked:t==null?void 0:t.state3,onChange:()=>R({...t,state3:!(t!=null&&t.state3)}),name:"accept",required:!0},"Ich bestätige, die Anfrage auf ein freibleibendes Angebot als Unternehmer und nicht in meiner Eigenschaft als Verbraucher i.S.d. § 1 des Konsumentenschutzgesetzes (KSchG) zu tätigen.")))))))),e.createElement(J,{className:"zep-w-full zep-text-center",type:"submit"},"Nachricht absenden")))}};var G,H,T;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      gender,
      firstName,
      lastName,
      email,
      phone,
      company,
      street,
      houseNumber,
      postalCode,
      city,
      location,
      rentalDevice,
      message,
      multiChecked
    } = context.value;
    const {
      setGender,
      setFirstName,
      setLastName,
      setEmail,
      setPhone,
      setCompany,
      setStreet,
      setHouseNumber,
      setPostalCode,
      setCity,
      setLocation,
      setRentalDevice,
      setMessage,
      setMultiChecked
    } = context.setValue;
    const multiCheckedRequired = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    const multiCheckedMessage = multiCheckedRequired ? 'Alle Checkboxen sind obligatorisch' : '';
    return <form className="zep-max-w-[648px]" onSubmit={e => {
      alert(JSON.stringify({
        gender,
        firstName,
        lastName,
        email,
        phone,
        company,
        street,
        houseNumber,
        postalCode,
        city,
        location,
        rentalDevice,
        message,
        multiChecked
      }));
      e.preventDefault();
    }}>
        <Spacing direction="column" gap="1">
          <Spacing direction="column" gap="3">
            {/* Ihre Kontaktdaten */}
            <Spacing direction="column" gap="0">
              <h3 className="zep-typography-headlineLg">Ihre Kontaktdaten</h3>
              <Spacing direction="column" gap="0">
                <FormField>
                  <Spacing gap={'1.5'} direction={'row'} className="zep-my-1.5">
                    <Radio id="gender-male" name="gender" label="Herr" selected={gender === 'gender-male'} value={gender} onChange={() => setGender('gender-male')} required />
                    <Radio id="gender-female" name="gender" label="Frau" selected={gender === 'gender-female'} value={gender} onChange={() => setGender('gender-female')} required />
                    <Radio id="gender-diverse" name="gender" label="Divers" selected={gender === 'gender-diverse'} value={gender} onChange={() => setGender('gender-diverse')} required />
                  </Spacing>
                </FormField>
                <FormField>
                  <Spacing direction="column" gap="1">
                    <Input id="first-name" placeholder="Ihr Vorname" autoComplete="vorname" label="Vorname" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <Input id="last-name" autoComplete="name" label="Name" placeholder="Ihr Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
                    <Input id="email" placeholder="Ihre E-Mail-Adresse" type="email" autoComplete="email" label="E-Mail-Adresse" required value={email} onChange={e => setEmail(e.target.value)} />
                    <FormField message="Supporting Text">
                      <Input id="phone" placeholder="Ihre Telefonnummer" autoComplete="phone" label="Phone here when ready" required value={phone} onChange={e => setPhone(e.target.value)} />
                    </FormField>
                  </Spacing>
                </FormField>
              </Spacing>
            </Spacing>
            {/* Anschrift */}
            <Spacing direction="column" gap="1.5">
              <h3 className="zep-typography-headlineLg">Anschrift</h3>
              <Spacing direction="column" gap="0">
                <FormField>
                  <Spacing direction="column" gap="1">
                    <Input id="company" placeholder="Ihr Unternehmen" autoComplete="company" label="Unternehmen" value={company} onChange={e => setCompany(e.target.value)} />
                    <Spacing direction="row" gap="1.5">
                      <Input id="street" placeholder="Ihre Straße" autoComplete="street" label="Staße" value={street} onChange={e => setStreet(e.target.value)} className="zep-grow" />
                      <Input id="house-number" placeholder="Ihre Hausnummer" autoComplete="house-number" label="Nr." value={houseNumber} onChange={e => setHouseNumber(e.target.value)} />
                    </Spacing>
                    <Spacing direction="row" gap="1.5">
                      <Input id="postal-code" placeholder="Ihre PLZ" autoComplete="postal-code" label="PLZ" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                      <Input id="city" placeholder="Ihr Ort" autoComplete="city" label="Ort" required value={city} onChange={e => setCity(e.target.value)} className="zep-grow" />
                    </Spacing>
                    <Input id="location" placeholder="Ihr Einsatzort" autoComplete="location" label="PLZ Baustelle/Einsatzort" required value={location} onChange={e => setLocation(e.target.value)} />
                  </Spacing>
                </FormField>
              </Spacing>
            </Spacing>
            {/* Ihr Anliegen */}
            <Spacing direction="column" gap="1.5">
              <h3 className="zep-typography-headlineLg">Ihr Anliegen</h3>
              <Spacing direction="column" gap="0">
                <FormField>
                  <Spacing direction="column" gap="1">
                    <DropDown items={dropdownItems} placeholder="Bitte wählen Sie das gewünschte Mietgerät" value={rentalDevice} required onChange={item => setRentalDevice(item)} />
                    <TextArea id="message" label="Nachricht" placeholder="Ihre Nachricht" className="zep-h-[168px]" value={message} onChange={e => setMessage(e.target.value)} />
                  </Spacing>
                  <Spacing direction="column" gap="0">
                    <FormField id={'cool'} message={multiCheckedMessage} state={'default'}>
                      <Spacing direction="column" gap="0.5">
                        <Checkbox id="accept-amb" checked={multiChecked?.state1} onChange={() => setMultiChecked({
                        ...multiChecked,
                        state1: !multiChecked?.state1
                      })} name="accept" required>
                          Ich habe die <Link label="AMB" />, die <Link label="Mietbedingungen für Kraftfahrzeuge" /> und
                          die <Link label="AVLB" /> zur Kenntnis genommen und bin mit deren Geltung einverstanden.
                        </Checkbox>
                        <Checkbox id="accept-datenschutz" checked={multiChecked?.state2} onChange={() => setMultiChecked({
                        ...multiChecked,
                        state2: !multiChecked?.state2
                      })} name="accept" required>
                          Ich habe die <Link label="Datenschutzerklärung" /> gelesen und willige in die Verwendung
                          meiner Daten ein.
                        </Checkbox>
                        <Checkbox id="accept-konsumentenschutzgesetz" checked={multiChecked?.state3} onChange={() => setMultiChecked({
                        ...multiChecked,
                        state3: !multiChecked?.state3
                      })} name="accept" required>
                          Ich bestätige, die Anfrage auf ein freibleibendes Angebot als Unternehmer und nicht in meiner
                          Eigenschaft als Verbraucher i.S.d. § 1 des Konsumentenschutzgesetzes (KSchG) zu tätigen.
                        </Checkbox>
                      </Spacing>
                    </FormField>
                  </Spacing>
                </FormField>
              </Spacing>
            </Spacing>
          </Spacing>
          <Button className="zep-w-full zep-text-center" type="submit">
            Nachricht absenden
          </Button>
        </Spacing>
      </form>;
  }
}`,...(T=(H=I.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const ue=["Default"];export{I as Default,ue as __namedExportsOrder,de as default};
//# sourceMappingURL=contact-form.stories-43cbce76.js.map
