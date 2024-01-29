

const ShoeCard = (props) => {
    

    const handleClick = ()=>{
        if(props.bigShoeImg !== props.imgURL.bigShoe){
          props.ChangeBigShoeImage(
            props.imgURL.bigShoe
          )
        }
    }




  return (
    <div className={`border-2 rounded-2xl overflow-hidden
    ${props.bigShoeImg === props.imgURL.bigShoe ? "border-coral-red": "border-tranparent"}
    cursor-pinter max-sm:flex-1
    `}
    onClick={handleClick}
    >

<div className="flex justify-center items-center bg-card bg-center bg-cover w-30 h-30 sm:w-40 sm:h-40 max-sm:p-4">
  <img src={props.imgURL.thumbnail} 
  alt="Shoe Collection"
  width={127}
  height={103.34}
  className="object-contain"
  />
</div>
    </div>
  )
}

export default ShoeCard