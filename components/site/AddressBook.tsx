"use client";

import { useActionState, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { saveAddress, deleteAddress, type FormState } from "@/lib/actions/storefront";

type Address = {
  id: string;
  fullName: string;
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  zip: string;
  phone: string | null;
};

const field =
  "w-full rounded-xl border border-line bg-white/70 px-4 py-2.5 text-[0.92rem] outline-none transition-colors placeholder:text-ink-soft/50 focus:border-forest/60";

function AddressForm({ address, onDone }: { address?: Address; onDone: () => void }) {
  const [state, action, pending] = useActionState<FormState, FormData>(async (prev, fd) => {
    const res = await saveAddress(prev, fd);
    if (res?.success) onDone();
    return res;
  }, null);

  return (
    <form action={action} className="grid gap-3 rounded-3xl border border-forest/30 bg-white/80 p-5">
      {address ? <input type="hidden" name="id" value={address.id} /> : null}
      <input className={field} name="fullName" required placeholder="Full name" defaultValue={address?.fullName} />
      <input className={field} name="line1" required placeholder="Street address" defaultValue={address?.line1} />
      <input className={field} name="line2" placeholder="Apt, suite (optional)" defaultValue={address?.line2 ?? ""} />
      <div className="grid grid-cols-3 gap-3">
        <input className={field} name="city" required placeholder="City" defaultValue={address?.city} />
        <input className={field} name="state" required placeholder="State" defaultValue={address?.state} />
        <input className={field} name="zip" required placeholder="ZIP" defaultValue={address?.zip} />
      </div>
      <input className={field} name="phone" placeholder="Phone (optional)" defaultValue={address?.phone ?? ""} />
      {state?.error ? <p className="text-[0.85rem] text-clay">{state.error}</p> : null}
      <div className="flex gap-2">
        <button
          disabled={pending}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-forest px-6 text-[0.9rem] font-semibold text-cream disabled:opacity-60"
        >
          {pending ? <Loader2 className="size-3.5 animate-spin" /> : null} Save address
        </button>
        <button type="button" onClick={onDone} className="h-11 rounded-full px-5 text-[0.9rem] font-medium text-ink-soft hover:bg-ink/5">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function AddressBook({ addresses }: { addresses: Address[] }) {
  const [editing, setEditing] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [pendingDelete, startDelete] = useTransition();
  const router = useRouter();
  const done = () => {
    setEditing(null);
    setAdding(false);
    router.refresh();
  };

  return (
    <div className="space-y-4">
      {addresses.map((a) =>
        editing === a.id ? (
          <AddressForm key={a.id} address={a} onDone={done} />
        ) : (
          <div key={a.id} className="flex items-start justify-between gap-4 rounded-3xl border border-line bg-white/70 p-5">
            <p className="leading-relaxed text-[0.95rem]">
              <span className="font-semibold">{a.fullName}</span>
              <br />
              <span className="text-ink-soft">
                {a.line1}
                {a.line2 ? `, ${a.line2}` : ""}
                <br />
                {a.city}, {a.state} {a.zip}
                {a.phone ? (
                  <>
                    <br />
                    {a.phone}
                  </>
                ) : null}
              </span>
            </p>
            <div className="flex shrink-0 gap-1">
              <button
                onClick={() => {
                  setAdding(false);
                  setEditing(a.id);
                }}
                aria-label="Edit address"
                className="grid size-9 place-items-center rounded-full text-ink-soft hover:bg-forest/8 hover:text-forest"
              >
                <Pencil className="size-4" />
              </button>
              <button
                onClick={() =>
                  startDelete(async () => {
                    await deleteAddress(a.id);
                    router.refresh();
                  })
                }
                disabled={pendingDelete}
                aria-label="Delete address"
                className="grid size-9 place-items-center rounded-full text-ink-soft hover:bg-clay/10 hover:text-clay"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        )
      )}

      {adding ? (
        <AddressForm onDone={done} />
      ) : (
        <button
          onClick={() => {
            setEditing(null);
            setAdding(true);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-dashed border-forest/40 px-6 py-3 text-[0.92rem] font-medium text-forest-mid transition-colors hover:bg-forest/5"
        >
          <Plus className="size-4" /> Add new address
        </button>
      )}
    </div>
  );
}
