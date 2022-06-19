import { ChangeEvent, useState } from "react";

export function RequestInfo() {
  const [inputs, setInputs] = useState({ address: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const url = new URL("https://nominatim.openstreetmap.org/search.php");
    url.searchParams.append("format", "jsonv2");
    url.searchParams.append("q", inputs.address);

    fetch(url)
      .then((res) => res.json())
      .then((addresses) =>
        setMessage(() =>
          addresses.length === 0 ? "Address not found" : "Brochure sent"
        )
      );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value || "";
    setInputs(() => ({ address }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="address"
        data-testid="address"
        onChange={handleChange}
      ></input>
      <button type="submit" data-testid="btn-search">
        Search
      </button>
      <p data-testid="message">{message}</p>
    </form>
  );
}
