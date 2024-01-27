

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

<div className="flex justify-center items-center bg-card bg-center bg-cover h-[160px]">
  <img src={props.imgURL.thumbnail} 
  alt="Shoe Collection"
  width={160}
  className="object-fit"
  />
</div>
    </div>
  )
}

export default ShoeCard