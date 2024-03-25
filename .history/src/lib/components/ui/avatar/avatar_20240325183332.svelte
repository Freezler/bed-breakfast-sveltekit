<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	export { Avatar }

	type $$Props = AvatarPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export let delayMs: $$Props['delayMs'] = undefined;
	export { className as class };
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn(
		"relative flex h-[44px]  w-[44px] rounded-full bg-[url('https://thispersondoesnotexist.com')] bg-cover bg-no-repeat",
		className
	)}
	{...$$restProps}
>
	<slot />
</AvatarPrimitive.Root>
