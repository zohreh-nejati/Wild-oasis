import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">بروزرسانی حساب کاربری</Heading>

      <Row type="vertical">
        <Heading as="h3">به‌روزرسانی داده‌های کاربر</Heading>
        <p>به روز رسانی فرم اطلاعات کاربر</p>
      </Row>

      <Row type="vertical">
        <Heading as="h3">رمز عبور را به روز کنید</Heading>
        <p>به روز رسانی فرم رمز عبور کاربر</p>
      </Row>
    </>
  );
}

export default Account;
