'use client'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBookingEmbed() {
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15-minute-chat"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000319"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  return (
    <section id="book-a-call" className="w-full h-full">
      <Cal
        namespace="15-minute-chat"
        calLink="utkarsh-rajvanshi-e9u4fd/15-minute-chat"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{"layout": "month_view"}}
      />
    </section>
  )
}