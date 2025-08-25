import Image from "next/image"
import levelsLogoImg from "./assets/levelsLogo.svg"
import levelsLogoImgSelected from "./assets/levelsLogoSelected.svg"

const styles = {
    selected: "font-medium text-left text-ttelectricBlue flex items-center gap-2",
    unselected: "font-light text-left text-slate-300 transition-all hover:scale-110"
}

function FiltersDesktop({ categories, setSelectedCategory, selectedCategory }) {
    return (
        <div className="max-w-[1500px] ">
            <div className='hidden mb:flex flex-col gap-6 items-start mb:ml-12 border-l border-white/40 pl-6 py-4'>
                {categories.map((category, index) => (
                    <div key={index} className={selectedCategory === category ? styles.selected : styles.unselected} onClick={() => setSelectedCategory(category)}>
                        {
                            selectedCategory === category
                                ? <>
                                    {category === "Levels" ?
                                        <p className="bg-gradient-to-br hover:cursor-pointer ">
                                            <Image src={levelsLogoImgSelected} alt="Levels" width={120} height={120} />
                                        </p>
                                        :
                                        <div className="flex flex-row items-start ">
                                            <div className="w-[5px] h-[5px] mt-2.5 mr-2  aspect-square rounded-full bg-ttelectricBlue" />
                                            <p>
                                                {category}
                                            </p>
                                        </div>
                                    }

                                </>
                                : <>
                                    {category === "Levels" ?
                                        <p className="hover:scale-105 cursor-pointer transition-all">
                                            <Image src={levelsLogoImg} alt="Levels" width={80} height={80} />
                                        </p>
                                        :
                                        <p className="cursor-pointer">
                                            {category}
                                        </p>
                                    }
                                </>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FiltersDesktop
