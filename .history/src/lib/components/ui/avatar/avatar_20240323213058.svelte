<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	type $$Props = AvatarPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export let delayMs: $$Props["delayMs"] = undefined;
	export { className as class };
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn("relative bg-[url('https://i.pravatar.cc/150')] flex h-10 w-10 rounded-full", className)}
	{...$$restProps}
>
	<slot />
</AvatarPrimitive.Root>
