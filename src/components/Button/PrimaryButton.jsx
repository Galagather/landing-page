const PrimaryButton = ({ text, width }) => {
  return (
    <button
      style={{
        width: width
      }}
      className="bg-primary-500 text-white py-2.5 px-5 rounded-lg font-semibold">
      {text}
    </button>
  )
}

export default PrimaryButton;