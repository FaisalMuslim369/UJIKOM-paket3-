export function Container (props) {
    return <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${props.className}`}>
        {props.children}
    </div>
}

export function Row (props) {
    let justifyClasses = {
        'start': 'justify-start',
        'end': 'justify-end',
        'center': 'justify-center',
        'between': 'justify-between',
        'around': 'justify-around',
    };

    let alignClasses = {
        'start': 'items-start',
        'end': 'items-end',
        'center': 'items-center',
        'baseline': 'items-baseline',
        'stretch': 'items-stretch',
    };

    return <div className={`flex ${justifyClasses[props.justify || "start"]} ${alignClasses[props.align || "start"]} ${props.className}`}>
        {props.children}
    </div>
}

export function Col (props) {
    return <div className={`w-full md:w-${props.pc}/12 ${props.hp ? `sm:w-${props.hp}/12` : ''} ${props.className}`}>
        {props.children}
    </div>
}
