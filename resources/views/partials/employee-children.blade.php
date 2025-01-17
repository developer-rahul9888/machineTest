<ul>
    @foreach ($children as $child)
        <li>{{ $child->name }}
            @if ($child->children->count())
                @include('partials.employee-children', ['children' => $child->children])
            @endif
        </li>
    @endforeach
</ul>