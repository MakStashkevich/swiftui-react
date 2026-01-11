
import SwiftUI

struct ListExamplesView: View {
    let items = ["Item 1", "Item 2", "Item 3", "Item 4"]

    var body: some View {
        List {
            Section(header: Text("Simple List")) {
                ForEach(items, id: \.self) {
                    Text($0)
                }
            }
            
            Section(header: Text("List with Navigation")) {
                ForEach(items, id: \.self) {
                    item in
                    NavigationLink(item, destination: Text("Detail for \(item)"))
                }
            }
        }
        .navigationTitle("List Examples")
    }
}

struct ListExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ListExamplesView()
    }
}
