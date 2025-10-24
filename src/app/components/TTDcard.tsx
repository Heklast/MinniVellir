import FadeInOnScroll from "./scroll";

export default function TTDcard({ title, description, imageFirst }: {
    title: string;
    description: string;
    imageFirst: boolean;
}) {
    return (
        <>
            <FadeInOnScroll>
                <div className="TTD-card">
                    <div className="TTD-image">
                        <img src="/image.png"></img>
                    </div>
                    <div className="TTD-text">
                        <h1 className="text-4xl leading-relaxed" >{title}</h1>
                        <h3 className="text-xl font-light leading-relaxed" > {description}</h3>
                        <h3 className="text-xl font-light leading-relaxed" > Let us know if you want to go {title}!</h3>
                        <button className="TTD-button">
                            <a href='#contactus'>Contact us</a></button>
                    </div>

                </div>
            </FadeInOnScroll></>);
}