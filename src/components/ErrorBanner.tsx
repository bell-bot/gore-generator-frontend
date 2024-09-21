export default function ErrorBanner({
	errorMessage,
}: {
	errorMessage: string;
}) {
	return (
		<div
			className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'
			role='alert'
		>
			<p className="flex flex-col break-normal text-sm">{errorMessage}</p>
		</div>
	);
}