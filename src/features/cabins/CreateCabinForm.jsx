import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabinRow } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 400;
`;
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: (newCabin) => createCabinRow(newCabin),
    onSuccess: () => {
      toast.success("کلبه جدید اضافه شد");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmitEvent(data) {
    mutate(data);
  }
  function onError(error) {
    console.log(error);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmitEvent, onError)}>
      <FormRow label={"اسم کلبه"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "پر کردن این فیلد الزامی است" })}
        />
      </FormRow>
      <FormRow label={"حداکثر ظرفیت"} error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "پر کردن این فیلد الزامی است",
            min: {
              value: 1,
              message: "ظرفیت باید حداقل یک باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label={"قیمت"} error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "پر کردن این فیلد الزامی است",
            min: {
              value: 1,
              message: "ظرفیت باید حداقل یک باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label={"تخفیف"} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "پر کردن این فیلد الزامی است",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "تخفیف باید کمتر از قیمت اصلی باشد",
          })}
        />
      </FormRow>

      <FormRow
        label={"توضیحات برای وبسایت"}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "پر کردن این فیلد الزامی است",
          })}
        />
      </FormRow>
      <FormRow label={"عکس کلبه"} error={errors?.description?.message}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          لغوکردن
        </Button>
        <Button disabled={isCreating}>افزودن کلبه</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
