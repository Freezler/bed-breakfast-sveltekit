<script lang='ts'>
  
  import { Avatar as AvatarPrimitive } from 'bits-ui'
  import { cn } from '$lib/utils.js'

  type $$Props = AvatarPrimitive.Props | any
  let className: $$Props['class']
  let delayMs: $$Props['delayMs']
  export { className as class }
</script>

<AvatarPrimitive.Root
  {delayMs}
  class={cn(
    'relative flex h-[44px] w-[44px] rounded-full bg-cover bg-[url(https://i.pravatar.cc/300)] bg-no-repeat p-0 shadow-2xl',
    className,
  )}
  {...$$restProps}
>
  <slot />
</AvatarPrimitive.Root>