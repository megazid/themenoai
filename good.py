import os

# Get the directory to create files in
directory = input("Enter the directory to create files in: ").strip()

# Create the directory if it doesn't exist
os.makedirs(directory, exist_ok=True)

# Get the list of page names
pages = input("Enter the list of page names separated by commas: ").strip().split(",")

# Generate each file
for page in pages:
    page = page.strip()
    if not page:
        continue

    filename = page.capitalize() + ".tsx"
    filepath = os.path.join(directory, filename)

    # Write the basic structure to the file
    with open(filepath, "w") as file:
        component_name = filename.replace(".tsx", "")
        file.write(f"export function {component_name}({{}}) {{\n")
        file.write("  return (\n")
        file.write(f"    <div>{{/* Add your {component_name} content here */}}</div>\n")
        file.write("  );\n")
        file.write("}\n")

    print(f"Created: {filepath}")
