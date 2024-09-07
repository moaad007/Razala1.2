
import Pcard from "./pcard"


export default function Search() {
  return (

<>
<div className="bg-[#D9D9D9] h-[415px] w-[400px]  rounded-[12px] md:w-[800px] md:h-[830px] parent  overflow-y-auto ">
<div className="mb-3 xl:w-[100%]">
          <div className="relative mb-4 flex w-[100px] items-center justify-center m-auto top-3">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-blue bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

          </div>
      </div>
      <div className="gap-[15px]">
<Pcard/>
     <Pcard />
     <Pcard />
     <Pcard />
     <Pcard />
     <Pcard/>
     <Pcard />

      </div>
        
   
    
</div>


</>

  )
}