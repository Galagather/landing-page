const PrimaryButton = ({ text, width, onClick, disabled }) => {
  return (
    <button
      style={{
        width: width
      }}
      className="bg-primary-500 text-white py-2.5 px-5 rounded-lg font-semibold disabled:opacity-40"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default PrimaryButton;