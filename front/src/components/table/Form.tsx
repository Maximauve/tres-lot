import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Field from "../Field";
import { normalizeLinks } from "../../utils/dataAccess";
import TResource from "./type";
import { SubmissionError, TError } from "../../utils/types";

interface FormProps {
	onSubmit: (item: Partial<TResource>) => any;
	initialValues?: Partial<TResource>;
	error?: TError;
	reset: () => void;
}

const Form = ({ onSubmit, error, reset, initialValues }: FormProps) => {
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<TResource>({
		defaultValues: initialValues
			? {
				...initialValues,
			}
			: undefined,
	});

	useEffect(() => {
		if (error instanceof SubmissionError) {
			Object.keys(error.errors).forEach((errorPath) => {
				if (errors[errorPath as keyof TResource]) {
					return;
				}
				setError(errorPath as keyof TResource, {
					type: "server",
					message: error.errors[errorPath],
				});
			});

			reset();
		}
	}, [error, errors, reset, setError]);

	const onFormSubmit: SubmitHandler<TResource> = (data) => {
		onSubmit({
			...data,
			cards: normalizeLinks(data["cards"]),
		});
	};

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<Field
				register={register}
				name="name"
				placeholder=""
				type="text"
				errors={errors as any}
			/>
			<Field
				register={register}
				name="cards"
				placeholder=""
				type="text"
				errors={errors as any}
			/>
			<Field
				register={register}
				name="workspace"
				placeholder=""
				type="text"
				errors={errors as any}
			/>

			<button type="submit" className="btn btn-success">
				Submit
			</button>
		</form>
	);
};

export default Form;