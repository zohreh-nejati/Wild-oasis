import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">همه کلبه‌ها</Heading>
        <span> فیلتر کردن / مرتب کردن</span>
      </Row>
      <Row>
        <CabinTable />
        <Button variations="primary" onClick={() => setShowForm(!showForm)}>
          افزودن کلبه جدید
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
