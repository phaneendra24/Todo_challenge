import Line from "./_uicomponents/Line";
const Separator = () => (
  <Line />
);
export default function Home() {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-[80vh] gap-5">

      <div className="text-center border-r " >ones</div >
      <div className="text-center border-r " >two</div >
      <div className="text-center border-r " >three</div >
      <div className="text-center " >four</div >

    </div >
  )

}
