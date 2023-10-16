const cityData = {
    MienBac: ['Hanoi', 'Thai Binh', 'Quang Ninh','Viet Tri','Lao Cai'],
    MienTrung: ['Da Nang', 'Hue', 'Quang Tri','Quy Nhon'],
    MienNam: ['Ho Chi Minh City', 'Binh Duong', 'Bac Lieu','Ben Tre','Ca Mau'],
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
const ChooseCity=()=>('');
export default ChooseCity;