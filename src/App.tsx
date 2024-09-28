import COLORS from './colors.json';

//component to render list of colors within COLORS object
const ColorPallette = ({ colors }) => {
    const rendered = colors.map(item => {
        const colorStyle = '#' + item.hex;
        return (
            <ul style={{ padding: '5px' }} key={item.hex}>
                #{item.hex}:<li style={{ marginLeft: '2rem', color: colorStyle, textDecoration: 'underline' }}>Primary Color Name: {item.name}</li>
                <li style={{marginLeft: '2rem'}}>Complimentary Colors:</li>
                <CompColors complimentary={item.comp} />
            </ul>
        );
    });

    return <div>{rendered}</div>;
};

//component to render the complimnentary colors
const CompColors = ({ complimentary }) => {
    const rendered = complimentary.map(item => {
        return (
            //don't have a unique key so using the array index
            <li style={{ marginLeft: '4rem' }} key={item.index}>
                #{item.hex} {item.name}
            </li>
        );
    });

    return rendered;
};

const App = () => {
    return (
        <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Color Pallette List</h1>
            <ColorPallette colors={COLORS} />
        </div>
    );
};

export default App;
