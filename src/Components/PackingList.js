import './PackingList.css';

function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = name + ' ✔';
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section className='packing-list'>
            <h2>Sally Ride's Packing List</h2>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}
